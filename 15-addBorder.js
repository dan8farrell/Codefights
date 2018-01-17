//add border of "*" to array of strings.

function addBorder(picture) {
    for (let i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    let topBottom = picture[0].length;
    let border = [];

    for (let i = 0; i < topBottom; i++) {
        border.push("*")
    }
    border = border.join('');

    //add top and bottom borders
    picture.push(border);
    picture.unshift(border);

    return picture
}