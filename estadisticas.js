//VARIABLES
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
    let equipoNuevo = {name: name,logoID:logoID, goalsFor: golesEquipo, PG:partidosEquipo ,avg:promediGolRedondado};
    newStats.push(equipoNuevo)
  }
  
  let sortedStats = newStats.sort((a,b) => {
      return b.avg -a.avg  
  });
  console.log(sortedStats)
};

let round = (num, decimales = 2) =>{
    var signo = num >= 0 ? 1 : -1;
    num = num * signo;
    if (decimales === 0) return signo * Math.round(num);
    num = num.toString().split("e");
    num = Math.round(
      +(num[0] + "e" + (num[1] ? +num[1] + decimales : decimales))
    );
    num = num.toString().split("e");
    return signo * (num[0] + "e" + (num[1] ? +num[1] - decimales : -decimales));
  }

//DECLARACION FUNCIONES
estadisticas(table);