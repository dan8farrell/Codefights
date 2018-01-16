//If one cell can be removed to make a sequence of +1 each cell. ie [2,3,4,5] ---> return True... else return false.
function almostIncreasingSequence(seq) {
    //if falseAt2 count reaches two loop returns false(more than one cell had to be removed)
    let falseAt2 = 0;
    for (let i = 0; i < seq.length; i++)
        if (seq[i] <= seq[i - 1]) {
            falseAt2++;
            if (falseAt2 > 1) return false
            if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) 
            	return false
        }
    return true
}