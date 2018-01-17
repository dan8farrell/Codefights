//if the sum of the first half of n is equal to the sum of the second half---> return true
//Otherwise return false

//make n string and find midway point
function isLucky(n) {
    n = n.toString();
    var half = n.length / 2;

    //find value of each half
    var firstHalf = n.substring(0, half).split("").reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    });
    var secondHalf = n.substring(half, n.length).split("").reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
    //ternary statement to determine whether firstHalf is equal to secondHalf
    return firstHalf === secondHalf ? true : false;
}