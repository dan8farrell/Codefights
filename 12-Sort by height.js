//Sorts array into ascending order. Except for array cells with value of -1.
//split into three  diff arrays... sort people... then spliced in tree array 
//with their original position.
function sortByHeight(a) {
    let people = [];
    let trees = [];
    let sort = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            trees.push(a[i]);
        } else trees.push(0) && people.push(a[i]);
    }

    people = people.sort(function(a, b) {
        return a - b
    });

    for (let i = 0; i < trees.length; i++) {
        if (a[i] === -1) {
            people.splice(i, 0, -1);
        }
    }
    return people;
}