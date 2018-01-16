//Find the common characters shared by two strings.

function commonCharacterCount(s1, s2) {
    let length = s1.length;
    let count = 0;
//loop through s1, everytime a character from s1 pairs as a common character 
//count is increased by one and the character from s2 is removed.
    for(let i= 0; i<length; i++) {
        if(s2.search(s1[i]) !=-1) {
            s2 = s2.replace(s1[i], "");
            count++;
        }
    }
    return count;
}
