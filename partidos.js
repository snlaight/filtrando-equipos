fetch("./standings.json")
.then ((response)=> response.json())
.then ((data) =>{

//VARIABLES GLOBALES    
    let Standings = data.standings[0].table;
    let StandingsHome = data.standings[1].table
    let StandingsAway = data.standings[2].table
    console.log("TOTALES", Standings)
    console.log("HOME", StandingsHome)
    console.log("AWAY", StandingsAway)

let nombreEquipo = document.getElementById("NombreEquipo");
let radioGanado = document.getElementById("radio-ganado");
let radioEmpatado = document.getElementById("radio-empatado");
let radioPerdido = document.getElementById("radio-perdido");
let elementosRadio = document.getElementsByClassName("filtroPartidos");
let cabezaTabla = document.getElementById("cabezaTabla")
let cuerpoTabla = document.getElementById("equipoFiltrado");


//FUNCIONES



let pintarTablaPromedio = (array) => {
  for (let i=0; i < 2;i++){
    let th = document.createElement("thead");
      th.setAttribute('class','table-light');
      th.setAttribute('id','cabezaTabla');
      th.innerHTML= `<th colspan="2"> Equipo</th>
      <th> PJ </th>
      <th>Promedio</th>`;
  }
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



});

