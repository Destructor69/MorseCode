function separate(string) {
    var sepString = [] 
    var len = string.length
    for (i = 0; i < len ; i++) {
        sepString.push(string[i].toLowerCase())
    }
    return sepString ;
}



//go through every element in the array
//check the lette against the "letters"
//  if a match then convert
function convertL2M(array) {
    var newArray = []
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "] ;
    var lettersMorse = [".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... ", ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. ", "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. ", "/ "] ;
    var len = array.length ;
    
    //goes through each index of 'array', and when the index equals an index in 'letters', the index of the array is turned into the morse code counterpart
    for (i = 0; i < len ; i++) {
        for (j = 0 ; j < 27; j++) {
            if (array[i] == letters[j]){
                newArray.push(lettersMorse[j]) ;
            }
        }
    }
    return newArray ;
    // check if the 'letters are in the string, if so then convert
}



function join(array) {
    var joined = array.join("") ;
    return joined ;
}

//==============Down=================
//this is the code that connects html to this, not the morse code conversion

function work() {
    var input = document.getElementById("input").value ;
    var output = join(convertL2M(separate(input))) ;
    document.getElementById("output").innerHTML = output ;
}
