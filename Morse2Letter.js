//split it at the spaces
//convert it
//    -find morse code letter in array
//    -replace the morse code letter
//join it

function split(string) {
    var splitString = string.split(" ") ;
    return splitString ;
}



function convertM2L(array) {
    var newArray = [] ;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "] ;
    var lettersMorse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/"] ;
    var len = array.length 
    for (i = 0; i < len ; i++) {
        for (j = 0 ; j < 27 ; j++) {
            if (array[i] == lettersMorse[j]) {
                newArray.push(letters[j]) ;
            }
        }
    }
    return newArray ;
}



function combine(array) {
    var combinedArray = array.join("") ;
    return combinedArray ;
}



//===============Done===================

function work2() {
    var input = document.getElementById("input").value ;
    var output = combine(convertM2L(split(input))) ;
    document.getElementById("output").innerHTML = output ;
}
