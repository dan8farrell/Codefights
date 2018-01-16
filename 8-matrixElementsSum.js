// Each cell in the matrix contains an integer that represents the price of the room. 
//Some rooms are free (their cost is 0), but that's probably because they are haunted,
//so all the bots are afraid of them. That is why any room that is free or is located 
//anywhere below a free room in the same column is not considered suitable for the bots 
//to live in.

function matrixElementsSum(matrix) {
    let totalPrice = 0;
    let hauntedIndex = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                hauntedIndex.push(j)
            }
            //if value doesn't exist in hauntedIndex add to totalPrice
            else if (hauntedIndex.indexOf(j) === -1) {
                totalPrice += matrix[i][j];
            }
        }
    }
    return totalPrice;
}

//Shoutout to CodingTutorials360 for helping me discover indexOf method for this challenge.