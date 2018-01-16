//Return largest product of any two adjacent array cells...[2,3,5,8] would return 40.

function adjacentElementsProduct(inputArray) {
    let arr = inputArray;
    let answer = Number.NEGATIVE_INFINITY;
    let ansArr = [];
    
    //pushes all products of inputArray into new array ansArr
    for(let i = 0; i < arr.length -1;i++){
        let product = arr[i] * arr[i+1];
        ansArr.push(product);
    }
    //sorts ansArr array in descending order. Then returns first cell for largest product
    ansArr.sort(function(a, b){return b - a});
    return ansArr[0];
}