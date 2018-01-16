//Given an array of strings, return another array containing all of its longest strings.

//Find longest string length and store as longString
function allLongestStrings(inputArray) {
    var longString = inputArray[0].length;
    for (var i = 0; i < inputArray.length; i++) {
        if (longString < inputArray[i].length) {
            longString = inputArray[i].length;
        }
    }
    
    //change inputArray to only have longString strings.
    inputArray = inputArray.filter((element) => {
        return element.length === longString;
    })
    return inputArray;
}