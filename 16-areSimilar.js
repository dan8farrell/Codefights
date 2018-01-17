
function areSimilar(a, b) {

    if (a.toString() === b.toString()) {
        return true;
    }
    var c = [];
    var d = [];
    //Iterate through arrays
    for (var i = 0; i < a.length; i++) {
        //If a value is not the same in a or b
        //Add the value of each to the array
        if (a[i] != b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    //Reverse the array to compare later
    d = d.reverse();
    //c.length means 1 swap occured as two values didnt add up
    //compare the reversed d array to c array for the same values meanigng we can 
    if (c.length === 2 && (c.toString() == d.toString())) {
        return true;
    }
    return false;
}



///second way to go about challenge... goto meetup and have it explained
function areSimilar(a, b) {
    const a2 = a.filter((i,x) => d!=b[i])
    const b2 = b.filter((i,x) => d!=a[i])
    return a2.length == 0 || (a2.length == 2 && a2.join('') == b2.reverse().join(''))
}
