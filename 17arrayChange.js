// minimal number of moves required to obtain a strictly increasing sequence from the input.(by +1 each time)
function arrayChange(inputArray) {
    var answer = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            answer += (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
        }
    }
    return answer;
}
