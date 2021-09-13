// function alternatingSums(a) {
//     var team1 = 0;
//     var team2 = 0;
//     for(var i = 0; i < a.length; i++) {
//         if( i % 2 ===0){
//             team1 += a[i];
//         }else{
//             team2 += a[i];
//         }
//         return [team1, team2];
//     }
// }
// var a = [60, 40, 55, 75, 64];
// console.log(alternatingSums(a));

function alternatingSums(a) {
    var teamWeights = [0, 0],
        i = 0,
        whichTeam = 0;
    while (i < a.length) {
      teamWeights[whichTeam] += a[i];
      i++;
      whichTeam = (whichTeam + 1) % 2;
    }
    return teamWeights;
  }
    var a = [60, 40, 55, 75, 64];
    console.log(alternatingSums(a));

