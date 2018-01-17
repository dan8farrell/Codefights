//Divide array into two sub arrays. Odds go into team1. Evens into team2.
//Pretty self explanitory.

function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    let answer = [];
    for (var i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            team1 += a[i];
        } else team2 += a[i];
    }
    answer.push(team1, team2);
    return answer;
}