//take array and find how many cells need to be added to make it increments of one. [4,2,5,1] = 1
function makeArrayConsecutive2(statues) {
//Find max and minimum in array --> Then take find difference against array length.
    let min = Math.min.apply(Math, statues);
    let max = Math.max.apply(Math, statues);
    let difference = (max - min) + 1;
   	return difference - statues.length;
}



