//Not my answer, codingtutorials360 on youtube was an amazing asset in hepling me 
//understand this problem. Check him out hes great https://www.youtube.com/channel/UC5Wi_NYysX-LfcqT3Hq9Faw
function reverseParentheses(s) {
    if (s.includes('(')) {
        return reverseParentheses(reverseOnce(s));
    } else {
        return s;
    }
}

function reverseOnce(s) {
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    console.log(subStr);
    subStr = subStr.split('').reverse().join('');
    console.log(s);
    return s.replace(regexp, subStr)
}